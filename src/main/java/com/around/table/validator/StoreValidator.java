package com.around.table.validator;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class StoreValidator extends ResponseEntity {


    public StoreValidator() {
        super(status);
    }

    public ResponseEntity isValidStore(Long storeId) {
        if (storeId.equals(0L)) {
            return new ResponseEntity("가게를 생성하지 않은 유저입니다.", HttpStatus.OK);
        }
        return null;
    }
}
