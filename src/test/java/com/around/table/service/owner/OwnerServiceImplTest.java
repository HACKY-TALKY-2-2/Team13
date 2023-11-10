package com.around.table.service.owner;

import com.around.table.domain.owner.OwnerRepository;
import com.around.table.domain.owner.request.SignUpForm;
import com.around.table.entity.Owner;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Optional;

class OwnerServiceImplTest {

    private OwnerRepository ownerRepository;

    @Test
    @DisplayName("회원 가입 성공")
    void createNewOwnerSuccessful() {
        // given
        SignUpForm signUpForm = new SignUpForm("id", "password", "name", "email");

        Optional<Owner> owner = Optional.ofNullable(Owner.builder()
                .ownerId(signUpForm.getId())
                .ownerPassword(signUpForm.getPassword())
                .ownerName(signUpForm.getName())
                .email(signUpForm.getEmail())
                .build());

        // when
        try {
            ownerRepository.save(owner.get());
        } catch (Exception e) {
        }

        // then
        try {
            Owner foundOwner = ownerRepository.findByOwnerId(signUpForm.getId());
            System.out.printf("success");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

}