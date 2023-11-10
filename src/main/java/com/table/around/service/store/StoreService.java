package com.table.around.service.store;

import org.springframework.http.ResponseEntity;

public interface StoreService {
    ResponseEntity getStoreInfo(Long id);
}
