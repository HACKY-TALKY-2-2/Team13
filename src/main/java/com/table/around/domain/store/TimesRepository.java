package com.table.around.domain.store;

import com.table.around.entity.Times;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TimesRepository extends JpaRepository<Times, Long> {
    List<Times> findByStoreId(Long id);
}
