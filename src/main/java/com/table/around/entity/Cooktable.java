package com.table.around.entity;

import javax.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.table.around.entity.Store;

@Entity
@javax.persistence.Table(name = "cooktable")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DynamicInsert
@DynamicUpdate
@Builder
public class Cooktable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "INT UNSIGNED DEFAULT 0", nullable = false)
    private Integer seatCount;

    @Column(columnDefinition = "DEFAULT TRUE", nullable = false)
    private boolean isAvailable;

    @ManyToOne
    @JoinColumn(name = "storeId")
    private Store store;
}
