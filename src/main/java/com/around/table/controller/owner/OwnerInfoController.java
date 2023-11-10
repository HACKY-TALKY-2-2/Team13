package com.around.table.controller.owner;

import com.around.table.domain.owner.request.SignUpForm;
import com.around.table.service.owner.OwnerService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Api(value = "점주의 정보를 관리하는 API")
@RestController
@RequestMapping("/api/owner")
@RequiredArgsConstructor
public class OwnerInfoController {

    private final OwnerService ownerService;

    @ApiOperation(value = "회원 가입")
    @PostMapping("/sign-up")
    public ResponseEntity signUp(@RequestBody SignUpForm signUpForm) {
        return ownerService.signUp(signUpForm);
    }

}