package com.around.table.domain.menu.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
@RequiredArgsConstructor
public class MenuForm {

    private String menuName;
    private Integer price;

}
