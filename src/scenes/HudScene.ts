import Phaser from "phaser";

export class HudScene extends Phaser.Scene {
  constructor() {
    super({ key: "HudScene", active: false });
  }

  create(): void {
    this.add
      .text(12, 8, "platform-fighter  ·  A/D move  ·  Space jump  ·  J punch", {
        fontFamily: "system-ui, sans-serif",
        fontSize: "14px",
        color: "#cfcfd6",
      })
      .setScrollFactor(0);
  }
}
