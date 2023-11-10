package com.around.table.domain.table.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
@RequiredArgsConstructor
public class TableUpdateForm {

    private Long storeId;
    private Integer tableId;
    private Integer seatCount;

}
