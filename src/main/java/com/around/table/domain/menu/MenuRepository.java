package com.around.table.domain.menu;

import com.around.table.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}
