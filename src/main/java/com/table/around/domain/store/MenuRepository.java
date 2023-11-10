package com.table.around.domain.store;

import com.table.around.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, Long> {
    List<Menu> findByStoreId(Long id); // id = store.id

}