package com.around.table.domain.owner.responce;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OwnerInfoForm {

    private Long ownerId;
    private Long storeId;

}
