package com.around.table.domain.times.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
//@NoArgsConstructor
@RequiredArgsConstructor
public class OpeningHourForm {

    private String openingTime;
    private String closingTime;
    private String breakTime;
    private String lastOrder;

}
