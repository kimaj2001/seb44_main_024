package com.codestates.server.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MultiResponseDto<T> {
    private T topScore;
    private T mostReview;
}
