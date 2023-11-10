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

    @Column(nullable = false, columnDefinition = "INT UNSIGNED")
    private Integer dayOfWeek; // 0: Monday, 1: Tuesday, ..., 6: Sunday

    @Column(nullable = false)
    private LocalTime openingTime;

    @Column(nullable = false)
    private LocalTime closingTime;

    @Column(nullable = false, columnDefinition = "DEFAULT FALSE")
    private boolean isDayOff;

    @Column(name = "break_start_time")
    private LocalTime breakStartTime;

    @Column(name = "break_end_time")
    private LocalTime breakEndTime;

    @Column(name = "last_order_time")
    private LocalTime lastOrderTime;
}
