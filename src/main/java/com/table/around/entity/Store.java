package com.example.hackexercise.entity;

import java.util.List;
import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "store")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@DynamicInsert
@DynamicUpdate
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100, nullable = false)
    private String storeName;
    @Column(length = 250, nullable=false)
    private String address;
    @Column(nullable = false)
    private Float rating;
    @Column(nullable = false)
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
