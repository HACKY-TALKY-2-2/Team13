package com.around.table.domain.table;

import com.around.table.entity.Cooktable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<Cooktable, Long> {
}
