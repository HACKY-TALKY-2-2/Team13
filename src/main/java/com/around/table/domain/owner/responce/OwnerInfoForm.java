package com.around.table.domain.owner.responce;

import lombok.*;

@Getter
@AllArgsConstructor
//@NoArgsConstructor
@RequiredArgsConstructor
@Builder
public class OwnerInfoForm {

    private Long ownerId;
    private Long storeId;

}
