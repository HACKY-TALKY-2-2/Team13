package com.around.table.domain.table.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
@RequiredArgsConstructor
public class TableForm {

    private Integer tableId;
    private Integer seatCount;
    private Integer tableCount;

}
