package com.table.around.service.owner;

import com.table.around.domain.owner.OwnerRepository;
import com.table.around.domain.owner.request.SignUpForm;
import com.table.around.entity.Owner;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class OwnerServiceImpl implements OwnerService{

    private final OwnerRepository ownerRepository;

    @Override
    public ResponseEntity signUp(SignUpForm signUpForm) {
        Optional<Owner> owner = 
        return null;
    }
}
