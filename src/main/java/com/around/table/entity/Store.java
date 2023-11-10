package com.around.table.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "store")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long storeId;

    @Column(length = 20, nullable = false)
    private String storeName;

    @Column(length = 150, nullable=false)
    private String address;

    @Column(nullable = false)
    private Float rating;

    @Column(nullable = false)
    private Boolean isOpen;

    @Column(nullable = false)
    private String imagePath;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="ownerKey")
    private Owner owner;

}