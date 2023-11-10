package com.table.around.entity;

import javax.persistence.*;
import javax.persistence.Table;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

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
    private Long id;

    @Column(length = 20, nullable = false)
    private String menuName;

    @Column(columnDefinition = "INT UNSIGNED DEFAULT 0", nullable = false)
    private Integer price;

    @Column(nullable = false, columnDefinition = "DEFAULT TRUE")
    private Boolean isOrderable;

    @ManyToOne
    @JoinColumn(name="storeId")
    private Store store;
}
