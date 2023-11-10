package com.around.table.domain.store;

import com.around.table.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface StoreRepository extends JpaRepository<Store, Long> {

    Store findByOwnerKey(Long ownerKey);
}
