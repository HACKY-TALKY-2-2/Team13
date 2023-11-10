package com.around.table.domain.times;

import com.around.table.entity.Times;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

@NoRepositoryBean
public interface TimesRepository extends JpaRepository<Times, Long> {
}
