package com.table.around.domain.owner.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SignUpForm {

    @ApiModelProperty(value = "아이디", required = true)
    private String id;

    @ApiModelProperty(value = "비밀번호", required = true)
    private String password;

    @ApiModelProperty(value = "이름", required = true)
    private String name;

    @ApiModelProperty(value = "이메일", required = true)
    private String email;

}