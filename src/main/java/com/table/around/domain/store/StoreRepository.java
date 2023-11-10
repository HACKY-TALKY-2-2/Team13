package com.table.around.domain.store;

import com.table.around.entity.Store;
import com.table.around.entity.Menu;
import com.table.around.entity.Cooktable;
import com.table.around.entity.Times;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;
import java.util.List;

public interface StoreRepository extends JpaRepository<Store, Long> {

    Optional<Store> findById(Long id);





}
