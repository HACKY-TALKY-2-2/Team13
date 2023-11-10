package com.around.table.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.*;


@Entity
@Table(name = "cooktable")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DynamicInsert
@DynamicUpdate
@Builder
public class Cooktable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cooktableId;

    @Column(nullable = false)
    private Integer seatCount;

    @Column(nullable = false)
    private boolean isAvailable;

    @ManyToOne
    @JoinColumn(name = "storeId")
    private Store store;
}