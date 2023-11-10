package com.table.around.service.owner;

import com.table.around.domain.owner.request.SignUpForm;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class OwnerServiceImpl implements OwnerService{
    @Override
    public ResponseEntity signUp(SignUpForm signUpForm) {
        return null;
    }
}
