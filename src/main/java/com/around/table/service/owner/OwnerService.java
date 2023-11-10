package com.around.table.service.owner;

import com.around.table.domain.owner.request.SignUpForm;
import org.springframework.http.ResponseEntity;

public interface OwnerService {

    ResponseEntity signUp(SignUpForm signUpForm);

}
