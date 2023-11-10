package com.around.table.domain.owner.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SignInForm {

    private String ownerId;
    private String password;

}
