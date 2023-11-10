package com.around.table.service.cooktable;

import com.around.table.domain.table.request.TableUpdateForm;
import org.springframework.http.ResponseEntity;

public interface CooktableService {

    ResponseEntity updateTableInfo(TableUpdateForm tableUpdateForm);

}
