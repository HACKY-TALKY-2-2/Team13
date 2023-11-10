package com.table.around.domain.store;

import com.table.around.entity.Store;
import com.table.around.entity.Menu;
import com.table.around.entity.Times;
import com.table.around.entity.Cooktable;
import lombok.Data;

import java.util.List;

@Data
public class StoreVO {
    private Store store;
    private List<Menu> menus;
    private List<Times> times;
    private List<Cooktable> cooktables;

    public StoreVO(Store store, List<Cooktable> cooktables, List<Menu> menus, List<Times> times) {
        this.store = store;
        this.cooktables = cooktables;
        this.menus = menus;
        this.times = times;
    }
}