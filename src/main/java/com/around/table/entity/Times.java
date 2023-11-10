package com.around.table.entity;

import lombok.*;
import org.hibernate.annotations.Entity;

import javax.persistence.*;
import java.time.LocalTime;

@Entity
@Table(name = "times")
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Times {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long timesId;

    @ManyToOne
    @JoinColumn(name = "storeId", nullable = false)
    private Store store;

    @Column(nullable = false, columnDefinition = "INT UNSIGNED")
    private Integer dayOfWeek; // 0: Monday, 1: Tuesday, ..., 6: Sunday

    @Column(nullable = false)
    private LocalTime openingTime;

    @Column(nullable = false)
    private LocalTime closingTime;

    @Column(nullable = false)
    private boolean isDayOff;

    @Column(name = "break_start_time")
    private LocalTime breakStartTime;

    @Column(name = "break_end_time")
    private LocalTime breakEndTime;

    @Column(name = "last_order_time")
    private LocalTime lastOrderTime;
}