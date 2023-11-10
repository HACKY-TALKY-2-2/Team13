package com.table.around.entity;

import javax.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.List;


@Entity
@Table(name = "store")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DynamicInsert
@DynamicUpdate
@Builder
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20, nullable = false)
    private String storeName;

    @Column(length = 150, nullable=false)
    private String address;

    @Column(nullable = false, columnDefinition = "DEFAULT 0")
    private Float rating;

    @Column(nullable = false, columnDefinition = "DEFAULT FALSE")
    private Boolean isOpen;

    @Column(nullable = false)
    private String imagePath;

    @OneToOne
    @JoinColumn(name="ownerId")
    private Owner owner;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "storeId")
    private List<Times> businessHoursList;
}