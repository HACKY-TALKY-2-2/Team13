package com.around.table.service.store;

import com.around.table.domain.store.request.StoreInfoForm;
import org.springframework.http.ResponseEntity;

public interface StoreService {

    Long getStoreId(Long ownerId);

    ResponseEntity putStoreInfo(StoreInfoForm storeInfoForm);

}
