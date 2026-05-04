import Phaser from "phaser";
import { TestArena } from "../arenas/TestArena";
import { Fighter } from "../entities/Fighter";
import {
  DEFAULT_PLAYER_ONE_BINDINGS,
  KeyboardController,
} from "../systems/InputController";

export class ArenaScene extends Phaser.Scene {
  private fighter?: Fighter;

  constructor() {
    super("ArenaScene");
  }

  create(): void {
    const arena = new TestArena(this);
    const spawn = arena.spawnPoint();

    const controller = new KeyboardController(this, DEFAULT_PLAYER_ONE_BINDINGS);
    this.fighter = new Fighter(this, spawn.x, spawn.y, controller);
  }

  update(time: number): void {
    this.fighter?.update(time);
  }
}
