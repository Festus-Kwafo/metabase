import type { MantineThemeOverride } from "@mantine/core";
import { getSize } from "@mantine/core";

export const getTextareaOverrides = (): MantineThemeOverride["components"] => ({
  Textarea: {
    defaultProps: {
      size: "md",
    },
    styles: (theme, _, { size = "md" }) => ({
      wrapper: {
        marginTop: theme.spacing.xs,
      },
      label: {
        color: theme.colors.text[1],
        fontSize: getSize({ size, sizes: theme.fontSizes }),
      },
    }),
  },
});
