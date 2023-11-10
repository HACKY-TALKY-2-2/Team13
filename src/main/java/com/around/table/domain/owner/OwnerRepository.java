package com.around.table.domain.owner;

import com.around.table.entity.Owner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OwnerRepository extends JpaRepository<Owner, Long> {

    Owner findByOwnerId(String owerId);

}
