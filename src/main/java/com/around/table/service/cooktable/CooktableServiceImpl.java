package com.around.table.service.cooktable;

import com.around.table.domain.store.StoreRepository;
import com.around.table.domain.table.CooktableRepository;
import com.around.table.domain.table.request.TableUpdateForm;
import com.around.table.entity.Cooktable;
import com.around.table.entity.Store;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CooktableServiceImpl implements CooktableService {

    private final StoreRepository storeRepository;
    private final CooktableRepository cooktableRepository;

    @Override
    public ResponseEntity updateTableInfo(TableUpdateForm tableUpdateForm) {
        Optional<Store> store = storeRepository.findById(tableUpdateForm.getStoreId());

        Optional<Cooktable> cooktable = Optional.ofNullable(Cooktable.builder()
                .storeId(store.get())
                .cooktableId(Long.valueOf(tableUpdateForm.getTableId()))
                .seatCount(tableUpdateForm.getSeatCount())
                .build());

        return new ResponseEntity(HttpStatus.OK);
    }
}
