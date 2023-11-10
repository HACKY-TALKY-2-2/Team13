package com.example.hackexercise.entity;

import jakarta.persistence.*;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
import java.time.DayOfWeek;

@Entity
@Table(name = "times")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Times {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "storeId", nullable = false)
    private Store store;

    @Column(nullable = false)
    private int dayOfWeek; // 0: Monday, 1: Tuesday, ..., 6: Sunday

    @Column(nullable = false)
    private LocalTime openingTime;

    @Column(nullable = false)
    private LocalTime closingTime;

    @Column(nullable = false)
    private boolean isDayOff;

    @Column(nullable = false)
    private LocalTime breakStartTime;

    @Column(nullable = false)
    private LocalTime breakEndTime;

    @Column(nullable = false)
    private LocalTime lastOrderTime;
}
