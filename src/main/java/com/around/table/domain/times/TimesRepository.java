package com.around.table.domain.time;

import com.around.table.entity.Times;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeRepository extends JpaRepository<Times, Long> {
}
