package com.around.table.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;


@Entity
@Table(name = "menu")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DynamicInsert
@DynamicUpdate
@Builder
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long menuId;

    @Column(length = 20, nullable = false)
    private String menuName;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private Boolean isOrderable;

    @ManyToOne
    @JoinColumn(name="storeId")
    private Store storeId;
}