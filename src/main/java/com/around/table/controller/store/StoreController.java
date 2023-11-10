package com.around.table.controller.store;

import com.around.table.domain.owner.request.SignUpForm;
import com.around.table.domain.store.request.StoreInfoForm;
import com.around.table.service.store.StoreService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "가게의 정보를 관리하는 API")
@RestController
@RequestMapping("/api/store")
@RequiredArgsConstructor
public class StoreController {

    private final StoreService storeService;

    @ApiOperation(value = "가게 정보 등록")
    @PostMapping("/upload")
    public ResponseEntity uploadStoreInfo(@RequestBody StoreInfoForm storeInfoForm) {
        return storeService.putStoreInfo(storeInfoForm);
    }

}
