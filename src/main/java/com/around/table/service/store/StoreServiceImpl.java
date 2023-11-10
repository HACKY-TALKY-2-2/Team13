package com.around.table.service.store;

import com.around.table.domain.store.StoreRepository;
import com.around.table.entity.Store;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class StoreServiceImpl implements StoreService {

    private final StoreRepository storeRepository;

    @Override
    public Long getStoreId(Long ownerId) {
        Optional<Store> store = Optional.ofNullable(storeRepository.findByOwnerId(ownerId));

        if (store.isPresent()) {
            return store.get().getStoreId();
        }
        return 0L;
    }

}
