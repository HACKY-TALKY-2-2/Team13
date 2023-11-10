package com.table.around.domain.store;

import com.table.around.entity.Cooktable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CooktableRepository extends JpaRepository<Cooktable, Long> {
    List<Cooktable> findByStoreId(Long id);
}
