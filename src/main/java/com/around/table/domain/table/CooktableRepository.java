package com.around.table.domain.table;

import com.around.table.entity.Cooktable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CooktableRepository extends JpaRepository<Cooktable, Long> {
}
