package com.fruits.fruits.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fruits.fruits.model.Fruit;

@RestController
public class FruitController {
    // /fruits
    @GetMapping("/fruits")
    public List<Fruit> getFruits() {
        // Create apple
        Fruit apple = new Fruit();
        apple.setColor("red");
        apple.setName("Apple");
        apple.setPrice(100);
        apple.setShape("round");
        apple.setSize("medium");

        // Create banana
        Fruit banana = new Fruit();
        banana.setColor("yellow");
        banana.setName("Banana");
        banana.setPrice(50);
        banana.setShape("curved");
        banana.setSize("small");

        // Create grapes
        Fruit grapes = new Fruit();
        grapes.setColor("purple");
        grapes.setName("Grapes");
        grapes.setPrice(150);
        grapes.setShape("round");
        grapes.setSize("small");

        // Create orange
        Fruit orange = new Fruit();
        orange.setColor("orange");
        orange.setName("Orange");
        orange.setPrice(80);
        orange.setShape("round");
        orange.setSize("medium");

        // Create mango
        Fruit mango = new Fruit();
        mango.setColor("yellow");
        mango.setName("Mango");
        mango.setPrice(200);
        mango.setShape("oval");
        mango.setSize("medium");

        List<Fruit> fruits = new ArrayList<>();
        fruits.add(apple);
        fruits.add(banana);
        fruits.add(grapes);
        fruits.add(orange);
        fruits.add(mango);
        return fruits;
    }

    // test - return apple fruit
    @GetMapping("/apple")
    public Fruit getApple() {
        Fruit apple = new Fruit();
        apple.setName("Apple");
        apple.setColor("Red");
        apple.setSize("Medium");
        apple.setPrice(100);
        apple.setShape("Round");
        return apple;
    }
}
