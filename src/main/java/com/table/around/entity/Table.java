package com.example.hackexercise.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@jakarta.persistence.Table(name = "table_mng")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DynamicInsert
@DynamicUpdate
public class Table {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "INT UNSIGNED")
    private int seatCount;

    @Column(columnDefinition = "INT UNSIGNED")
    private Integer tableCount;

    @Column()
    private Boolean isAvailable;

    @ManyToOne
    @JoinColumn(name = "storeId")
    private Store store;
}
