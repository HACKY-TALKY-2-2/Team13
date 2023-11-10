package com.around.table.service.store;

import com.around.table.domain.menu.MenuRepository;
import com.around.table.domain.owner.OwnerRepository;
import com.around.table.domain.store.StoreRepository;
import com.around.table.domain.store.request.StoreInfoForm;
import com.around.table.domain.table.CooktableRepository;
import com.around.table.domain.times.TimesRepository;
import com.around.table.entity.Owner;
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
public class StoreServiceImpl implements StoreService {

    private final StoreRepository storeRepository;
    private final OwnerRepository ownerRepository;
    private final CooktableRepository cooktableRepository;
    private final MenuRepository menuRepository;

    @Override
    public Long getStoreId(Long ownerKey) {
        Optional<Store> store = Optional.ofNullable(storeRepository.findByOwnerKey(ownerKey));

        if (store.isPresent()) {
            return store.get().getStoreId();
        }
        return 0L;
    }

    @Override
    public ResponseEntity putStoreInfo(StoreInfoForm storeInfoForm) {
        Optional<Owner> owner = Optional.ofNullable(ownerRepository.findByOwnerId(storeInfoForm.getOwnerId()));

        if (owner.isPresent()) {
            Optional<Store> store = Optional.ofNullable(Store.builder()
                    .storeName(storeInfoForm.getPlaceName())
                    .address(storeInfoForm.getLocation())
                    .isOpen(true)
                    .rating(new Float(5.0))
                    .imagePath("https://cf.channel.io/pri-thumb/976x,inside,webp/pri-file/146204/groups/315157/654e1c466cf9d65ec9ec/ellipse-1-thumb.webp?Expires=1699653541&Signature=E4EjeLFgpf5N68o-vROJMug0etFqI2oSTkKVwr8cJzAZTZx9GVWGJRr4vjcx3e3HaJo~YjEcqvUruUr7mTeC~aBg1kkHUmek3Ns~uRe3WxVwSK9pJTMsepKlIIli89HDEsqOkpmYO61xbB-Ygtrfw~sbRXIq2oWuaXvC0Q~Wj4x8r2WwDSdFB2OdM2caufhoaTrxt89WXoqp~4YGixQCovrCjrL4glZwwHncTfBrLPjHBj1yZTyGkpG8S5CA7iiXnVTeuKrriyrgOR1X~4GR1eu38fWDWRzR3hs4-p8zcde9c8LKhGC77MtHk-gxKM8T08DVqlDHm-a09gAMPdpu8g__&Key-Pair-Id=APKAIAMZX7TCOSXTBOFA")
                    .ownerKey(owner.get())
                    .build());
        } else {
            return new ResponseEntity("존재하지 않는 점주입니다.", HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity(HttpStatus.OK);
    }

}
