package com.around.table.domain.store.request;

import com.around.table.domain.menu.request.MenuForm;
import com.around.table.domain.table.request.TableForm;
import com.around.table.domain.times.request.OpeningHourForm;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@RequiredArgsConstructor
public class StoreInfoForm {

    private String ownerId;
    private String placeName;
    private String location;
    private List<MenuForm> menus;
    private List<OpeningHourForm> hours;
    private List<TableForm> tables;

}
