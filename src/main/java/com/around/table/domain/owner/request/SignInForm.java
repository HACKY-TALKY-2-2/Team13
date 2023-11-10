package com.around.table.domain.owner.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
//@NoArgsConstructor
@RequiredArgsConstructor
public class SignInForm {

    private String ownerId;
    private String password;

}
