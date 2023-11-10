package com.table.around.service.store;

import com.table.around.domain.store.StoreRepository;
import com.table.around.domain.store.MenuRepository;
import com.table.around.domain.store.CooktableRepository;
import com.table.around.domain.store.TimesRepository;

import com.table.around.entity.Store;
import com.table.around.entity.Menu;
import com.table.around.entity.Cooktable;
import com.table.around.entity.Times;

import com.table.around.domain.store.StoreVO;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class StoreServiceImpl implements StoreService{

    private final StoreRepository storeRepository;
    private final MenuRepository menuRepository;
    private final TimesRepository timesRepository;
    private final CooktableRepository cooktableRepository;

    @Override
    public ResponseEntity getStoreInfo(Long id) {
        Optional<Store> storeOptional = storeRepository.findById(id);

        if (storeOptional.isPresent()){

            Store store = storeOptional.get();
            List<Menu> menus = menuRepository.findByStoreId(id);
            List<Times> times = timesRepository.findByStoreId(id);
            List<Cooktable> cooktables = cooktableRepository.findByStoreId(id);

            StoreVO storeVO = new StoreVO(store, cooktables, menus, times);
            return ResponseEntity.ok(storeVO);
        }

        return ResponseEntity.notFound().build();
    }
}


