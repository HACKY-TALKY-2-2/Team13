package com.around.table.service.owner;

import com.around.table.domain.owner.OwnerRepository;
import com.around.table.domain.owner.request.SignInForm;
import com.around.table.domain.owner.request.SignUpForm;
import com.around.table.domain.owner.responce.OwnerInfoForm;
import com.around.table.entity.Owner;
import com.around.table.service.store.StoreService;
import com.around.table.validator.StoreValidator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class OwnerServiceImpl implements OwnerService {

    private final OwnerRepository ownerRepository;
    private final StoreService storeService;
    private StoreValidator storeValidator = new StoreValidator();

    @Override
    public ResponseEntity signUp(SignUpForm signUpForm) {
        Optional<Owner> owner = Optional.ofNullable(Owner.builder()
                .ownerId(signUpForm.getId())
                .ownerPassword(signUpForm.getPassword())
                .email(signUpForm.getEmail())
                .build());

        try {
            ownerRepository.save(owner.get());
        } catch (Exception e) {
            return new ResponseEntity("Fail to Sign Up", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity("Success to Sign up", HttpStatus.OK);
    }

    @Override
    public ResponseEntity SignIn(SignInForm signInForm) {
        Optional<Owner> owner = Optional.ofNullable(ownerRepository.findByOwnerId(signInForm.getOwnerId()));
        OwnerInfoForm ownerInfoForm = new OwnerInfoForm();

        if (signInForm.getPassword().equals(owner.get().getOwnerPassword())) {
            Long storeId = storeService.getStoreId(owner.get().getOwnerKey());
            storeValidator.isValidStore(storeId);

            ownerInfoForm = OwnerInfoForm.builder()
                    .ownerId(owner.get().getOwnerKey())
                    .storeId(storeId)
                    .build();
        }

        return new ResponseEntity(ownerInfoForm, HttpStatus.OK);
    }
}
