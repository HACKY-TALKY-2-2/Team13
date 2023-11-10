package com.table.around.service.owner;

import com.table.around.domain.owner.request.SignUpForm;
import org.springframework.http.ResponseEntity;

public interface OwnerService {

    ResponseEntity signUp(SignUpForm signUpForm);
}
